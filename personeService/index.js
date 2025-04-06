import {
  create,
  update,
  getAll,
  getById,
  deleteById,
} from "./personeService.js";

export const createPersone = async (req, res) => {
  if (req.body) {
    const createdPersone = await create(req.body);
    res.status(201).send({
      status: "success",
      message: "Persone created successfully",
      data: createdPersone,
    });
  } else {
    res.status(400).send({ message: "Hello World" });
  }
};

export const updatePersona = async (req, res) => {
  if (req.body) {
    const updatedPersone = await update(req.body);
    res.status(200).send({
      status: "success",
      message: "Persone updated successfully",
      data: updatedPersone,
    });
  } else {
    res.status(400).send({ message: "Hello World" });
  }
};

export const getAllPersone = async (req, res) => {
  try {
    const persone = await getAll();
    res.status(200).send({
      status: "success",
      message: "Persone fetched successfully",
      data: persone,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};

export const getPersoneById = async (req, res) => {
  try {
    const { id } = req.params;
    const persone = await getById(id);
    if (persone) {
      res.status(200).send({
        status: "success",
        message: "Persone fetched successfully",
        data: persone,
      });
    } else {
      res.status(404).send({
        status: "error",
        message: "Persone not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};

export const deletePersone = async (req, res) => {
  try {
    const { id } = req.params;
    const persone = await deleteById(id);
    if (persone) {
      res.status(200).send({
        status: "success",
        message: "Persone deleted successfully",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: "Persone not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};
