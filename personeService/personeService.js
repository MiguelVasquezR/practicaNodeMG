import PersoneModel from "./personeModel.js";

export const getAll = async () => {
  try {
    const persone = await PersoneModel.find();
    return persone;
  } catch (error) {
    throw new Error("Error fetching persone data");
  }
};

export const getById = async (id) => {
  try {
    const persone = await PersoneModel.findById(id);
    return persone;
  } catch (error) {
    throw new Error("Error fetching persone data");
  }
};

export const create = async (data) => {
  try {
    const newPersone = new PersoneModel(data);
    await newPersone.save();
    return newPersone;
  } catch (error) {
    throw new Error("Error creating persone data");
  }
};

export const update = async (data) => {
  try {
    const updatedPersone = await PersoneModel.findByIdAndUpdate(data.id, data, {
      new: true,
    });
    return updatedPersone;
  } catch (error) {
    throw new Error("Error updating persone data");
  }
};

export const deleteById = async (id) => {
  try {
    const deletedPersone = await PersoneModel.findByIdAndDelete(id);
    return deletedPersone;
  } catch (error) {
    throw new Error("Error deleting persone data");
  }
};
