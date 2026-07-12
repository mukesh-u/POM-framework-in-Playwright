import {test, expect} from '@playwright/test'

test('Creating data using Post', async ({request})=>{
    const requestBody=
    {
        name:'Mukesh',
        job:'Software Test Engineer'
    };

    const response=await request.post('https://jsonplaceholder.typicode.com/users',
        {
            data:requestBody,
        }
    );

    expect(response.status()).toBe(201);
    
    const body=await response.json()
    console.log(body);

    expect(body.name).toBe('Mukesh')
    expect(body.job).toBe('Software Test Engineer')
    expect(body.id).toBeDefined;
    expect(body.id).toBe(11);
})