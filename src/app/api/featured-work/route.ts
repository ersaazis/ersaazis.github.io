import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const GET = async () => {
    try {
        const filePath = path.join(process.cwd(), "data.json");
        const fileContents = fs.readFileSync(filePath, "utf8");
        const data = JSON.parse(fileContents);

        return NextResponse.json({
            featureWork: data.featuredWork || []
        });
    } catch (error) {
        console.error("Error reading data.json:", error);
        return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
    }
};