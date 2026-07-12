import {test,expect, request} from '@playwright/test'

test('Delete user data', async ({request})=>{
    
    const response= await request.delete('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status()).toBe(200);

    const responseBody=await response.json();
    console.log(responseBody)

    expect(responseBody).toEqual({});



})