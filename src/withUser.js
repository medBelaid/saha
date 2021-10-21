import axios from 'axios';
import React, { useEffect, useState } from 'react';
import github from './db';
import people from './people';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const withUser = (Component, resourceName) => {
    return props => {
        const [data, setData] = useState(people[2]);

        useEffect(() => {
            const githubQuery = {
                query: `
                {
                    viewer {
                        name
                        repositories(last: 5) {
                            nodes {
                                name
                                description
                                id
                                url
                            }
                        }
                    }
                }
              `
              };
              axios(github.baseUrl, {
                method: "POST",
                headers: github.headers,
                data: JSON.stringify(githubQuery)
              })
              .then((response) => {
                  console.log(response.data.data.viewer);
                setData({name: response.data.data.viewer.name, age: 33, hairColor: 'noir'});
              })
              .catch(err => {
                console.log(err)
              })
        }, []);
        const onChangeData = changes => setData({...data, ...changes});
        const resourceProps = {
            [resourceName]: data,
            [`onChange${capitalize(resourceName)}`]: onChangeData
        }
        return <Component {...props} title="HOC" {...resourceProps} index={2} />
    }
}
