import { NextResponse } from 'next/server';

let studentData = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

export function GET(request, { params }) {
  const { id } = params;
  const user = studentData.find((stu) => String(stu.id) === String(id));

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
