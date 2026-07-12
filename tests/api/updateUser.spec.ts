import {test, expect} from '@playwright/test'

test('Updating user data with PUT', async ({request})=>{
    const updatedUserData=
    {
        name:'Mukesh Upadhyay',
        job: 'Sdet',
        city: 'Mumbai'
    }

    const response= await request.put('https://jsonplaceholder.typicode.com/users/1',
        {
            data:updatedUserData
        }     
    );

    expect(response.status()).toBe(200);

    const responseBody=await response.json();
    console.log(responseBody);

    const responseHeaders= response.headers();
    console.log(responseHeaders)
    
    expect(responseBody.name).toBe(updatedUserData.name);
    expect(responseBody.job).toBe(updatedUserData.job);
    expect(responseBody.city).toBe(updatedUserData.city);
    expect(responseHeaders['content-type']).toContain('application/json')
    expect(responseBody).toBeDefined();

    console.log(responseBody)
})