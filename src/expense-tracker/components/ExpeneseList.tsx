interface ExpeneseProps {
  description: string;
  Amount: number;
  id: number;
  categories: string;
}
interface Props {
  expeneses: ExpeneseProps[];
  onDelete: (id: number) => void;
}
const ExpeneseList = ({ expeneses, onDelete }: Props) => {
  if (expeneses.length === 0) return null;
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Categories</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expeneses.map((expenese) => (
            <tr key={expenese.id}>
              <td>{expenese.description}</td>
              <td>{expenese.Amount}</td>
              <td>{expenese.categories}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(expenese.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              {expeneses.reduce((acc, expenese) => expenese.Amount + acc, 0)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpeneseList;
