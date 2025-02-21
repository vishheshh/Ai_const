import { Router } from "express";
import ReligionController from "../Controller/Religion.js";

const religionRouter = Router();

religionRouter.get("/get/:religionName", async (req, res) => {
  const { religionName } = req.params;
  console.log(religionName)
  const { offset = 0, limit = 20 } = req.query; // Default offset: 0, limit: 20
  try {
    const result = await new ReligionController().getReligion(
      religionName,
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

export default religionRouter