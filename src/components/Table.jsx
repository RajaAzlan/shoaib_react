import React from 'react';
import { EyeFill, Trash2Fill } from 'react-bootstrap-icons';
import '@/assets/scss/layout/_table.scss';

const Table = ({ tableHeader, tableBody }) => {
  return (
    <>
      <table id="my-table" className="custom-table shop-table">
        <thead>
          <tr>
            {tableHeader.map((thead, index) => (
              <TableHeader item={thead} key={index} />
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((item, index) => (
            <TableBody item={item} column={tableHeader} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
};
const TableHeader = ({ item }) => (
  <th className={item.heading === 'Action' ? 'text-center' : null}>
    {item.heading}
  </th>
);
const TableBody = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {
      if (columnItem.value === 'edit') {
        return (
          <td className="action text-center" key={index}>
            <button className="btn p-0 edit d-inline-block me-2">
              <EyeFill />
            </button>
            <button className="btn p-0 d-inline-block">
              <Trash2Fill />
            </button>
          </td>
        );
      }
      return <td key={index}>{item[`${columnItem.value}`]}</td>;
    })}
  </tr>
);
export default Table;
