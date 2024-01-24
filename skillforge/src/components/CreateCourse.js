import React, { useState } from 'react';
import axios from 'axios';


const CreateCourse = () => {

    const [returnresponse, setreturnresponse] = useState('');

    const [coursedata, setcoursedata] = useState({
        "title": "temp",
        "description": "Get started with the basics of cybersecurity and online safety.",
        "instructor": "15",
        "start_date": "2023-06-15",
        "end_date": "2023-09-15"
    });

    const handecreatecourse = async () => {
        const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2MTA2NDIxLCJpYXQiOjE3MDYwMjAwMjEsImp0aSI6IjEzOTc3OThmMWFlNjRjYjJiMjFlOGZkZjdlOGEzODc2IiwidXNlcl9pZCI6MTJ9.iW5wixkr0IHEg3FElTvhEUeFqMkCBDjITfNFgiedVQI";

        try {
            console.log("calling post request")

            const response = await axios.post('http://127.0.0.1:8000/courses/', coursedata, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log("printing response", response.data)

            setreturnresponse(response)

        } catch (error) {
            console.log("from catch")
            console.log(error.response.data)
            setreturnresponse(error.response)

        }
    }

    return (

        <div>

            {returnresponse.status === 201 && (

                <div>
                    <h1>course created</h1>

                    <div>
                        {returnresponse.data.title} 
                        <hr />
                       {JSON.stringify(returnresponse.data)}
                    </div>

                </div>


            )}

            <button onClick={handecreatecourse}>Add new course</button>

        </div>

    );

};

export default CreateCourse;