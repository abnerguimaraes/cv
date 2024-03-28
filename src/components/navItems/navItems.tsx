import mobileClasses from './css/navitems.mobile.module.css';
import deskClasses from './css/navitems.desk.module.css';

function NavItems({ onNavigate, items }) {
  return (
    <section className={`${mobileClasses.main} ${deskClasses.main}`}>
      <ul className={`${mobileClasses.itemList} ${deskClasses.itemList}`}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${mobileClasses.item} ${item.selected ? mobileClasses.selected : ''} 
                        ${deskClasses.item} ${item.selected ? deskClasses.selected : ''}`}
            onClick={() => onNavigate(item.path)}
          >
            <img className={`${mobileClasses.itemIcon} ${deskClasses.itemIcon}`} src={item.icon} />
            <span className={`${mobileClasses.itemLabel} ${deskClasses.itemLabel}`} >{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NavItems;