import { Router } from "express";
import CasteController from "../Controller/Caste.js";

const casteRouter = Router();

casteRouter.get("/hindu/get/:casteName", async (req, res) => {
  const { religionName,casteName } = req.params;
  const { offset = 0, limit = 20 } = req.query; // Default offset: 0, limit: 20
  try {
    const result = await new CasteController().getHindu(
      religionName,
      casteName,
      offset,
      limit
    );
    
    if (result.status === 0) {
      return res.status(404).send({ message: result.msg });  
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

casteRouter.get("/muslim/get/:casteName", async (req, res) => {
  const { religionName, casteName } = req.params;
  const { offset = 0, limit = 20 } = req.query; // Default offset: 0, limit: 20
  try {
    const result = await new CasteController().getMuslim(
      religionName,
      casteName,
      offset,
      limit
    );

    if (result.status === 0) {
      return res.status(404).send({ message: result.msg });
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

casteRouter.get("/sikh/get/:casteName", async (req, res) => {
  const { religionName, casteName } = req.params;
  const { offset = 0, limit = 20 } = req.query; // Default offset: 0, limit: 20
  try {
    const result = await new CasteController().getSikh(
      religionName,
      casteName,
      offset,
      limit
    );

    if (result.status === 0) {
      return res.status(404).send({ message: result.msg });
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

casteRouter.get("/:jain/get/:casteName", async (req, res) => {
  const { religionName, casteName } = req.params;
  const { offset = 0, limit = 20 } = req.query; // Default offset: 0, limit: 20
  try {
    const result = await new CasteController().getJain(
      religionName,
      casteName,
      offset,
      limit
    );

    if (result.status === 0) {
      return res.status(404).send({ message: result.msg });
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

casteRouter.get("/:buddhist/get/:casteName", async (req, res) => {
  const { religionName, casteName } = req.params;
  const { offset = 0, limit = 20 } = req.query; // Default offset: 0, limit: 20
  try {
    const result = await new CasteController().getBuddhist(
      religionName,
      casteName,
      offset,
      limit
    );

    if (result.status === 0) {
      return res.status(404).send({ message: result.msg });
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});
export default casteRouter;
