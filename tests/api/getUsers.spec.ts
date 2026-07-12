import {test, expect} from '@playwright/test'

test('Get users API ', async ({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/users');
    console.log("Response header:",response.headers());
    console.log("Response status text:",response.statusText());
    //console.log("Response body:",response.body()) -this returns a promise and since we are not using await it is not sending body
    console.log("Response status:",response.status());
    console.log("Response url:",response.url())

    const body=await response.json();
    console.log(body);
    expect(response.status()).toBe(200);

    console.log(body[0].name)
    console.log(body[0].email);
    console.log(body[0].address.street);
    console.log(body[0].company.name);


    //assertions
    const firstuser=body[0];
    expect(response.status()).toBe(200);
    expect(firstuser.name).toBe('Leanne Graham')
    expect(firstuser.email).toBe('Sincere@april.biz')
    expect(firstuser.address.street).toBe('Kulas Light');
    expect(firstuser.company.name).toBe('Romaguera-Crona');
    expect(body).toHaveLength(10);
    expect(firstuser.id).toBe(1);
})