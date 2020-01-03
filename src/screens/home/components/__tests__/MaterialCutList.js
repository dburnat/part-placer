import "jest-styled-components";
import React from "react";
import MaterialCutList from "../MaterialCutList";
import {render, fireEvent, wait} from '../../../../../test/utils';

const setup = () => {
  const editMaterialMock = jest.fn();
  const utils = render(
    <MaterialCutList
      onEditMaterial={editMaterialMock}
      parts={[]}
      width="8'"
      height="4'"
      id={1}
      name="test material"

    />
  );

  return {
    ...utils,
    editMaterialMock,
  };
};

test("should be able to trigger edit", async () => {
  const { editMaterialMock, getByText } = setup();
  await wait(() => {
    fireEvent.click(getByText('Edit Material'));
  }) 
  expect(editMaterialMock).toHaveBeenCalledTimes(1);
})

test("should be able to delete material", async () => {
  const { getByText, getByTestId } = setup();
  await wait(() => {
    fireEvent.click(getByText('Delete Material'));
  })
  await wait(() => {
    fireEvent.click(getByTestId('confirmation-dialog-ok'));
  })
})


test("should be able to add a part", async () => {
  const { getByTestId, getAllByTestId } = setup();

  const rows = getAllByTestId('part-row');
  expect(rows).toHaveLength(1);
  
  await wait(() => {
    fireEvent.click(getByTestId('add-part'));
  });

  const postAddRows = getAllByTestId('part-row');
  expect(postAddRows).toHaveLength(2);
});

test("should be able to remove a part", async () => {
  const { getByTestId, queryAllByTestId} = setup();
  
  await wait(() => {
    fireEvent.click(getByTestId('remove-part'));
  });

  const postAddRows = queryAllByTestId('part-row');
  expect(postAddRows).toHaveLength(0);
});
