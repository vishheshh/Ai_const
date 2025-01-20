import { Router } from "express";
import CasteController from "../Controller/Caste.js";

const casteRouter = Router();

casteRouter.get("/get/:casteName", async (req, res) => {
  const { casteName } = req.params;
  const { offset = 0, limit = 20 } = req.query; // Default offset: 0, limit: 20

  try {
    const result = await new CasteController().getCasteByCasteName(
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
