// src/app/api/users/route.js
import { NextResponse } from 'next/server';
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("curd_operation"); // Replace with your actual database name
    const collection = db.collection("users"); // Replace with your collection name
    
    // Fetch users from MongoDB
    const users = await collection.find({}).toArray();
    
    const data = {
      message: "Users fetched successfully",
      users: users,
      timestamp: new Date().toISOString()
    };
    
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: "Error fetching users", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("curd_operation"); // Replace with your actual database name
    const collection = db.collection("users"); // Replace with your collection name
    
    // Insert new user
    const result = await collection.insertOne({
      ...body,
      createdAt: new Date()
    });
    
    return NextResponse.json({
      message: "User created successfully",
      insertedId: result.insertedId,
      data: body
    }, { status: 201 });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json(
      { error: "Error creating user", details: error.message },
      { status: 500 }
    );
  }
}