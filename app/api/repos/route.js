import { NextResponse } from "next/server";

export const GET = async (request)=>{
    const res = await fetch("https://api.github.com/users/saikrishna488/repos");
    const data = await res.json();

    return NextResponse.json(data);
}