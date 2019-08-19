import Enzyme from 'enzyme';
import EnzymeAdapter  from 'enzyme-react-16';


Enzye.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
});

