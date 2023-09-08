/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Grid,
  Portal,
  Button,
  Fade,
  Hidden,
  FormControlLabel,
  Switch,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import { useStore, useAnalytics } from "shared/context";
import styled from "styled-components";
import { navigate } from "@reach/router";
import { parseDimension } from "parse-dimension";
import Material from "./components/Material";
// eslint-disable-next-line import/no-webpack-loader-syntax
import worker from "workerize-loader!./worker";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PrintIcon from "@material-ui/icons/Print";
import PropTypes from "prop-types";
import { Form, Formik } from "formik";
import {
  PrimaryButton,
  SecondaryButton,
  LoadingIndicator,
  ActionBar,
  DimensionField,
  RouterLink,
  VerticallyCenteredContainer
} from "shared/components";
import { useSnackbar } from "notistack";

const KerfEntry = styled(DimensionField)`
  width: 50px;
  margin-left: 20px;
  margin-right: 10px;
`;

function KerfForm({ onChange, value }) {
  return (
    <Formik
      initialValues={{ value }}
      onSubmit={(values, { setSubmitting }) => {
        onChange(values.value);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <VerticallyCenteredContainer>
            <KerfEntry
              showHelperText={false}
              margin="dense"
              name="value"
              variant="standard"
              label="Kerf"
            />

            <SecondaryButton disabled={isSubmitting} type="submit">
              Update <Hidden xsDown>Kerf</Hidden>
            </SecondaryButton>
          </VerticallyCenteredContainer>
        </Form>
      )}
    </Formik>
  );
}
KerfForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

function Layout({ headerRef }) {
  const {
    state,
    setKerf,
    setRotation,
    setSelectionStrategy,
    setSplitStrategy,
    setSortStrategy
  } = useStore();
  const [layouts, setLayouts] = useState(null);
  const { pageview, event } = useAnalytics();
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const handleKerfChange = newKerf => {
    setKerf(newKerf);
    enqueueSnackbar(`Kerf updated`, { variant: "success" });
    event({ category: "Layout", action: "Kerf Changed" });
  };
  const handleRotationChange = e => {
    setRotation(Boolean(e.target.checked));
  };

  const handleSelectionStrategyChange = newStrategy => {
    setSelectionStrategy(newStrategy ?? undefined);
    enqueueSnackbar(`Selection strategy updated`, { variant: "success" });
    event({ category: "Layout", action: "Selection strategy Changed" });
  };

  const handleSplitStrategyChange = newStrategy => {
    setSplitStrategy(newStrategy);
    enqueueSnackbar(`Split strategy updated`, { variant: "success" });
    event({ category: "Layout", action: "Split strategy Changed" });
  };

  const handleSortStrategyChange = newStrategy => {
    setSortStrategy(newStrategy);
    enqueueSnackbar(`Sort strategy updated`, { variant: "success" });
    event({ category: "Layout", action: "Sort strategy Changed" });
  };

  useEffect(() => {
    if (state.materials.length === 0) {
      navigate("/");
    } else {
      pageview("/layout");
    }
  }, [state.materials, pageview]);

  useEffect(() => {
    const MULTIPLIER = 1000;
    const convertedKerfSize = parseDimension(state.kerfSize) * MULTIPLIER;
    const convertAndScaleDimension = dimension =>
      Math.ceil(parseDimension(dimension) * MULTIPLIER);

    const selectionStrategy =
      state.selectionStrategy === "" ? undefined : state.selectionStrategy;
    const splitStrategy =
      state.splitStrategy === "" ? undefined : state.splitStrategy;
    const sortStrategy =
      state.sortStrategy === "" ? undefined : state.sortStrategy;

    Promise.all(
      state.materials.map(async material => {
        let instance = worker();
        const inputs = {
          ...material,
          width: convertAndScaleDimension(material.dimensions.width),
          height: convertAndScaleDimension(material.dimensions.height),
          convertedParts: material.parts.reduce((acc, part) => {
            const convertedPart = {
              name: part.name,
              id: part.id,
              dimensions: part.dimensions,
              height: convertAndScaleDimension(part.dimensions.height),
              width: convertAndScaleDimension(part.dimensions.width)
            };
            for (let i = 0; i < part.quantity; i++) {
              acc.push({ ...convertedPart, instanceNumber: i + 1 });
            }
            return acc;
          }, [])
        };
        inputs.bins = await instance.pack(
          {
            binHeight: inputs.height,
            binWidth: inputs.width,
            items: inputs.convertedParts
          },
          {
            kerfSize: convertedKerfSize,
            allowRotation: state.allowRotation,
            selectionStrategy: selectionStrategy,
            splitStrategy: splitStrategy,
            sortStrategy: sortStrategy
          }
        );
        return inputs;
      })
    ).then(transformedMaterials => {
      event({ category: "Layout", action: "Layout Generated" });
      setLayouts(transformedMaterials);
    });
  }, [
    state.materials,
    event,
    state.kerfSize,
    state.allowRotation,
    state.selectionStrategy,
    state.splitStrategy,
    state.sortStrategy
  ]);

  return (
    <Grid container spacing={3}>
      <Portal container={headerRef.current}>
        <Fade in>
          <RouterLink to="/">
            <Button size="small" variant="contained">
              <ArrowBackIcon />
              Parts <Hidden xsDown>Configuration</Hidden>
            </Button>
          </RouterLink>
        </Fade>
      </Portal>

      {layouts ? (
        <>
          <Grid item xs={12}>
            <ActionBar>
              <PrimaryButton onClick={() => window.print()}>
                <PrintIcon />
                <Hidden smDown>&nbsp;Print</Hidden>
              </PrimaryButton>
              <KerfForm onChange={handleKerfChange} value={state.kerfSize} />
              &nbsp;
              <FormControlLabel
                control={
                  <Switch
                    checked={state.allowRotation}
                    onChange={handleRotationChange}
                    value="allowRotation"
                    color="primary"
                  />
                }
                labelPlacement="top"
                label={`${matches ? "Allow " : ""}Rotation?`}
              />
              {/* Strategy selectors */}
              <FormControlLabel
                control={
                  <Select
                    value={state.selectionStrategy}
                    onChange={e =>
                      handleSelectionStrategyChange(e.target.value)
                    }
                  >
                    <MenuItem value="">-</MenuItem>
                    <MenuItem value={0}>BEST_SHORT_SIDE_FIT</MenuItem>
                    <MenuItem value={1}>BEST_LONG_SIDE_FIT</MenuItem>
                    <MenuItem value={2}>BEST_AREA_FIT</MenuItem>
                  </Select>
                }
                labelPlacement="top"
                label="Selection Strategy"
              />
              <FormControlLabel
                control={
                  <Select
                    value={state.splitStrategy}
                    onChange={e => handleSplitStrategyChange(e.target.value)}
                  >
                    <MenuItem value="">-</MenuItem>
                    <MenuItem value={0}>LongLeftoverAxisSplit</MenuItem>
                    <MenuItem value={1}>ShortLeftoverAxisSplit</MenuItem>
                    <MenuItem value={2}>LongAxisSplit</MenuItem>
                    <MenuItem value={3}>ShortAxisSplit</MenuItem>
                  </Select>
                }
                labelPlacement="top"
                label="Split Strategy"
              />
              <FormControlLabel
                control={
                  <Select
                    value={state.sortStrategy}
                    onChange={e => handleSortStrategyChange(e.target.value)}
                  >
                    <MenuItem value="">-</MenuItem>
                    <MenuItem value={0}>Area</MenuItem>
                    <MenuItem value={1}>ShortSide</MenuItem>
                    <MenuItem value={2}>LongSide</MenuItem>
                    <MenuItem value={3}>Perimeter</MenuItem>
                    <MenuItem value={4}>Differences</MenuItem>
                    <MenuItem value={5}>Ratio</MenuItem>
                  </Select>
                }
                labelPlacement="top"
                label="Sort Strategy"
              />
              {/* End of Strategy selectors */}
            </ActionBar>
          </Grid>
          {layouts.map(material => (
            <Grid key={material.id} item xs={12} lg={6}>
              <Material material={material} />
            </Grid>
          ))}
        </>
      ) : (
        <Grid item xs={12}>
          <LoadingIndicator message="Calculating layouts" />
        </Grid>
      )}
    </Grid>
  );
}

Layout.propTypes = {
  headerRef: PropTypes.shape({ current: PropTypes.any }).isRequired
};

export default Layout;
