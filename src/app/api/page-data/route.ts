import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export const GET = async () => {
    try {
        const filePath = path.join(process.cwd(), "data.json");
        const fileContents = fs.readFileSync(filePath, "utf8");
        const data = JSON.parse(fileContents);

        return NextResponse.json({
            profile: data.profile,
            experienceData: data.experience,
            educationData: data.education,
            skills: data.skills,
            languages: data.languages,
            tools: data.tools,
            gallery: data.gallery,
            featuredWork: data.featuredWork,
            certifications: data.certifications,
            achievements: data.achievements,
            projectOverview: data.projectOverview || { caseStudies: [], sideProjects: [] }
        });
    } catch (error) {
        console.error("Error reading data.json:", error);
        return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
    }
};