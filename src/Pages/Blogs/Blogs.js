import React from 'react';

const Blogs = () => {
    return (

        <div class="container-fluid px-4 mt-2 mb-5">
            <div class="row gx-5">
                <div class="col col-sm-12, col-md-6, col-lg-4">
                    <div class="p-3 border bg-light">
                        <h2>1. Difference between authorization and authentication</h2>
                        <p>Authentication verifies the user and then access the system. Authentication also ensure the person is user or not. And Authorization is, authorities checked , user can access the resources. It check mainly the validity.</p>
                    </div>
                </div>
                <div class="col">
                    <div class="p-3 border bg-light ">
                        <h2>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                        <p>There are many reasons, with that, first of all, it is used for securing purposes. It gives realtime data to access to the database directly from client-side code. We can get services from firebase like authentication, database, storage services. Alternatives or other options to implement authentication some of are - Parse(Open Source Backend Platform), Back4app(Parse Hosting Platform), Nhost(Accelerates development and provides full control), Hoodie(Generic backend with a client API for Offline First applications)</p>
                    </div>
                </div>
                <div class="col">
                    <div class="p-3 border bg-light  mt-2 mb-5">
                        <h2>3. What other services does firebase provide other than authentication</h2>
                        <p>Without authentication firebase provides Cloud Firestore, Storage, Machine Learning, Hosting, Cloud Functions </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;