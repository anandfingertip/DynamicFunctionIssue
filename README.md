# Dynamic Function Issue with Locker Service

We are having lots of challenges with Locker service. We found that there is something wrong with the dynamic function. When locker service is enabled it not possible to access global variables in a dynamic function.
 
Please check the below URL to see how I have called a dynamic function
https://github.com/anandfingertip/DynamicFunctionIssue/blob/master/src/aura/DemoComponent/DemoComponentController.js#L6-L8
 
Please, let me know if there is a workaround to solve this issue.
 
 
 
Steps to reproduce the error:
 
1. Deploy the code from  https://github.com/anandfingertip/DynamicFunctionIssue.
2. Navigate to https://login.salesforce.com/c/Test.app
3. After login, you'll get two buttons on the page called "Execute" and "Execute as dynamic javascript".
4. Press the Execute button, it works fine
5. Press the "Execute as dynamic javascript" button, it does not work and it will throw an error "Cannot read property 'add' of undefined"
 
Thank you!
