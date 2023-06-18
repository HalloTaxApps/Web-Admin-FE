import React from 'react'
import PageLayout from '../../PageLayout'

const TablePralogin = () => {
    return (
        <PageLayout>
            <table className='tablepralogin'>
                <table class="table-fixed">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Description</th>
                            {
                                <th scope="col">Action</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Pink</td>
                            {
                                <td className='flex'>
                                    <button className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 me-3'>Edit</button>
                                    <button className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-700' href='/editPralogin'>Delete</button>
                                </td>
                            }
                        </tr>
                    </tbody>
                </table>
            </table>
        </PageLayout>
    )
}

export default TablePralogin