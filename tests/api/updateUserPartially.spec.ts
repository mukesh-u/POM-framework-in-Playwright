import {test,expect} from '@playwright/test'

test('Updating user data partially with PATCH', async ({request})=>{
    const updatedData={
        job:'Senior sdet',
        city:'Pune'
    }

    const response=await request.patch('https://jsonplaceholder.typicode.com/users/1',
        {
            data:updatedData,
        }
    )

    expect(response.status()).toBe(200);

    const headers=await response.headers();
    expect(headers['content-type']).toContain('application/json')
    
    const responseBody=await response.json();
    console.log(responseBody);

    expect(responseBody.job).toBe(updatedData.job);
    expect(responseBody.city).toBe(updatedData.city);

})