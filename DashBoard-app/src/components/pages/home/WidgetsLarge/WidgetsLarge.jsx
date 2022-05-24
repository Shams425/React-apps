import React from "react";
import "./widgetsLarge.css";

export default function WidgetsLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetsLarge">
      <h3 className="widgetLgTitle">Latest Transactions</h3>

      <table className="widgetLargeTable">
        <thead>
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </thead>
        <tbody>
          <tr>
            <td className="widgetLgUser">
              <img src="" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">
              <p>2 Jun 2021</p>
            </td>
            <td className="widgetLgAmount">
              <p>$122.00</p>
            </td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr>
            <td className="widgetLgUser">
              <img src="" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">
              <p>2 Jun 2021</p>
            </td>
            <td className="widgetLgAmount">
              <p>$122.00</p>
            </td>
            <td>
              <Button type="Declined" />
            </td>
          </tr>

          <tr>
            <td className="widgetLgUser">
              <img src="" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">
              <p>2 Jun 2021</p>
            </td>
            <td className="widgetLgAmount">
              <p>$122.00</p>
            </td>
            <td>
              <Button type="Pending" />
            </td>
          </tr>

          <tr>
            <td className="widgetLgUser">
              <img src="" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">
              <p>2 Jun 2021</p>
            </td>
            <td className="widgetLgAmount">
              <p>$122.00</p>
            </td>
            <td>
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
