import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  await connectDB();

  const users = await User.find();
  return Response.json(users);
}

export async function POST(req: Request) {
  await connectDB();

  const { name, email } = await req.json();

  const newUser = await User.create({ name, email });
  return Response.json(newUser);
}
