import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <p className='text-primary '> /Blogs</p>
            <h4> 1.  Difference between authorization and authentication?</h4>
            <p>Authentication means to confirm a persons identity, while authorization means to give access to the system.  authentication verifies who you are, while authorization verifies what you have access to. </p>

            <h4> 2. Why  shoud use firebase? What other options have to implement authentication?</h4>
            <p>Every interactions website need to store there customer data.For this we need to  develop a database.But  this is almost imposible to develop a database and protect the data or password.But googe is doing the job.They have implemented firebse to keep data or customers data secure. It provides all backend services like authentication via Google, Facebook, OTP, email etc.So, i choose firebase.</p>
            <h6>Other options have for authentication list</h6>
            <ul>
                <li> STYTCH</li>

                <li>Supabase</li>
                <li> Okta</li>
                <li>PingIdentity</li>
                <li>Keycloak</li>
                <li>Amazon Cognito</li>
                <li>Auth0</li>
                <li>OneLogin</li>
                <li>Frontegg</li>

            </ul>
            <p>Besides  many other options we have to implement authentication</p>
            <div>
                <h4>3. There are many services which Firebase provides, Most useful of them are:</h4>
                <ul>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Authentication  </li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;