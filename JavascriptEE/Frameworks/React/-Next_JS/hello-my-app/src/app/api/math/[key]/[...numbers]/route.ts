import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ key: string; numbers: string[] }> } // params is now a Promise
    // ONLY claude4 fix this
) {
    try {
        // Await params before using its properties
        const { key, numbers } = await params;
        
        // Extract numbers from the path parameters
        // numbers is already an array of strings due to catch-all route segment
        const numbersArray = numbers.map(Number);

        // Validate that all parameters are numbers
        if (numbersArray.some(isNaN)) {
            return NextResponse.json(
                { error: "All segments of the 'numbers' path parameter must be numeric" },
                { status: 400 }
            );
        }

        // Calculate the sum
        const sum = numbersArray.reduce((acc, num) => acc + num, 0);

        // Return the result in the requested format
        return NextResponse.json({ [key]: sum });
    } catch (error: any) {
        console.error("Error in API route:", error);
        return NextResponse.json(
            { error: 'Internal server error', details: error.message },
            { status: 500 }
        );
    }
}