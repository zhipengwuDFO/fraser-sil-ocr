import { graphConfig } from "./authConfig";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken 
 */
export async function callMsGraph(accessToken: string): Promise<any> {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options: RequestInit = {
        method: "GET",
        headers: headers
    };

    try {
        const response = await fetch(graphConfig.graphMeEndpoint, options);
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}