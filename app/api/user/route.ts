import conn from "@/db/config";
import User from "@/models/userModel";

export async function GET() {
  await conn();

  const data = await User.find({});

  return Response.json(data);
}
