import React from 'react'

export default function EventUserHistory({bookedStatus}) {
    return (
        <div>
            <table class="table">
                <thead class="bg-secondary text-light">
                    <th>S/N</th>
                    <th>EVENT CENTRE</th>
                    <th>LOCATION</th>
                    <th>PRICE</th>
                    <th>DATE</th>
                    <th>TIME</th>
                    <th>STATUS</th>
                </thead>
                <tbody class="bg-primary text-light">
                    {bookedStatus.map((val, i)=> (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{val.hall}</td>
                            <td>{val.location}</td>
                            <td>{val.price}</td>
                            <td>{val.date}</td>
                            <td>{val.price}</td>
                            <td>{val.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
