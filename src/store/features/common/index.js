import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskField: [
    {
      id: 1,
      name: "Task Name",
      type: "text",
      requried: true
    },
    {
      id: 2,
      name: "Description",
      type: "textarea",
      requried: true
    },
    {
      id: 3,
      name: "Attachment",
      type: "file",
      requried: true
    },
 ],
 formFields: [
  // {
  //   id: 1,
  //   name: "Task Name",
  //   type: "text",
  //   requried: true
  // },
  // {
  //   id: 2,
  //   name: "Description",
  //   type: "textarea",
  //   requried: true
  // },
  // {
  //   id: 3,
  //   name: "Attachment",
  //   type: "file",
  //   requried: true
  // },
 ],
 dragId: null
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setTaskField(state, action) {
      state.taskField = action.payload;
    },
    setFormFields(state, action) {
      state.formFields = action.payload;
    },
    addToFormField(state,action) {
      console.log(action.payload,"payloa")
      console.log(state.formFields,"state....")
      const itemToPush = state.taskField.find((tf) => tf.id == action.payload)
      state.formFields.push(itemToPush)
        // state.common.formFields.push(state.common.taskField.find((tf) => tf.id == action.payload.id))
    },
    removeFromFormField: (state, action) => {
      console.log(state.formFields.filter((tf) => {
         console.log(tf.id !== action.payloadd,">>>")
         console.log(tf.id,"tf.id>>>")
      }),">>>>>>>>")
      state.formFields = state.formFields.filter((tf) => tf.id !== action.payload);
    },
    setDragId: (state, action) => {
       state.dragId = action.payload
    },

    updateFormFields: (state, action) => {
      state.formFields = action.payload
   }
  },
});

export default commonSlice.reducer;
export const { setDragId, addToFormField , removeFromFormField, updateFormFields} = commonSlice.actions;
