import { faChevronDown, faChevronLeft, faContactCard, faDashboard, faList, faSatellite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ALL_PRODUCTS, ORDERS, FAVORITES, NEW_ARRIVAL, DASHBOARD } from './RoutesURL'
export const sidebarData = [
    {
        "id": 1,
        "title": 'Dashboard',
        'path': DASHBOARD,
        'icon': <FontAwesomeIcon icon={faDashboard} />,
        'openIcon': <FontAwesomeIcon icon={faChevronLeft} />,
        'closeIcon': <FontAwesomeIcon icon={faChevronDown} />
    },
    {
        "id": 2,
        "title": 'All Poducts',
        'path': ALL_PRODUCTS,
        'icon': <FontAwesomeIcon icon={faList} />,
        'openIcon': <FontAwesomeIcon icon={faChevronLeft} />,
        'closeIcon': <FontAwesomeIcon icon={faChevronDown} />,
    },
    {
        "id": 3,
        "title": 'Orders',
        'path': ORDERS,
        'icon': <FontAwesomeIcon icon={faSatellite} />,
        'openIcon': <FontAwesomeIcon icon={faChevronLeft} />,
        'closeIcon': <FontAwesomeIcon icon={faChevronDown} />,
        // "submenu": [
        //     {
        //         "title": 'Beginner',
        //         'path': ORDERS,
        //         'icon': <FontAwesomeIcon icon={faCode} />,
        //     },
        //     {
        //         "title": 'Intermediate',
        //         'path': ORDERS,
        //         'icon': <FontAwesomeIcon icon={faCodeBranch} />,
        //     },
        //     {
        //         "title": 'Advance',
        //         'path': ORDERS,
        //         'icon': <FontAwesomeIcon icon={faCodeMerge} />,
        //     },
        // ]
    },
    {
        "id": 4,
        "title": 'Favorites',
        'path': FAVORITES,
        'icon': <FontAwesomeIcon icon={faContactCard} />,
        'openIcon': <FontAwesomeIcon icon={faChevronLeft} />,
        'closeIcon': <FontAwesomeIcon icon={faChevronDown} />,
    },
    {
        "id": 5,
        "title": 'New Arrival',
        'path': NEW_ARRIVAL,
        'icon': <FontAwesomeIcon icon={faContactCard} />,
        'openIcon': <FontAwesomeIcon icon={faChevronLeft} />,
        'closeIcon': <FontAwesomeIcon icon={faChevronDown} />,
    },
]