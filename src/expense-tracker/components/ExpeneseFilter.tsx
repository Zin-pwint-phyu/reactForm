import { categories } from ".";
interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpeneseFilter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <div className="mb-3">
        <select
          className="form-select"
          onChange={(event) => onSelectCategory(event.target.value)}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ExpeneseFilter;
