import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { usn, index_url } = body;

        // Validate input
        if (!usn || !index_url) {
            return NextResponse.json(
                { detail: 'USN and index_url are required' },
                { status: 400 }
            );
        }

        // Get backend API URL from environment variable
        const backendUrl = process.env.VTU_API_BASE_URL || 'vtu.results';
        const apiEndpoint = `${backendUrl}/single-post`;

        // Make request to Cloud Run backend
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                index_url: index_url,
                usn: usn.toUpperCase()
            }),
        });

        if (!response.ok) {
            return NextResponse.json(
                { detail: `Failed to fetch results: ${response.statusText}` },
                { status: response.status }
            );
        }

        // Return the response from backend
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Error fetching VTU results:', error);
        return NextResponse.json(
            { detail: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}

// Handle GET requests (optional, for testing)
export async function GET() {
    return NextResponse.json(
        {
            message: 'VTU Results API',
            usage: 'POST with { "usn": "YOUR_USN", "index_url": "VTU_RESULT_URL" }',
        },
        { status: 200 }
    );
}
