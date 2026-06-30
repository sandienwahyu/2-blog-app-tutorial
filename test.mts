import mongoose from "mongoose";

await mongoose.connect(
  "mongodb+srv://sandien:sandien-321@cluster0.naxs9z1.mongodb.net/test?appName=Cluster0",
);
console.log("✅ Connected!");
process.exit(0);
