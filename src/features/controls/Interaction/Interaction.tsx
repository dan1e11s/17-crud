import './style.scss';
import { useSearch } from '../use-search';
import { useLevel } from './use-level';
import { Level } from '../../../types/controls/controls';

type LevelOption = {
  [LevKey in Level]: { value: LevKey; label: LevKey };
};

const optionsMap: LevelOption = {
  All: { value: 'All', label: 'All' },
  Junior: { value: 'Junior', label: 'Junior' },
  Middle: { value: 'Middle', label: 'Middle' },
  Senior: { value: 'Senior', label: 'Senior' },
};

const Interaction = () => {
  const [search, handleSearch] = useSearch();
  const [level, handleSelect] = useLevel();

  return (
    <div className="interaction">
      <input
        type="text"
        placeholder="search"
        onChange={handleSearch}
        value={search}
      />
      <select
        value={level ? optionsMap[level].value : ''}
        onChange={handleSelect}
        className="select2"
        name="level"
      >
        <option value="All">All</option>
        <option value="Junior">Junior</option>
        <option value="Middle">Middle</option>
        <option value="Senior">Senior</option>
      </select>
    </div>
  );
};

export default Interaction;
