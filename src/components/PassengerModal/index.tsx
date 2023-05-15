import {StatusBar, View} from 'react-native';
import Modal from 'react-native-modal';
import useStyles from './styles';
import Header from '../Header';
import {textContent} from '../../constants/texts';
import Divider from '../Divider';
import {IPassengerModalProbs} from '../../types/modals';
import PassengerCount from '../PassangerCountCard';
import Adult from '../../svg/Adult';
import Child from '../../svg/Child';
import Baby from '../../svg/Baby';
import AppButton from '../AppButton';
import {useEffect, useState} from 'react';

const PassangerModal = ({
  isVisible,
  isRefreshed,
  onClose,
  onSelectPassenger,
}: IPassengerModalProbs) => {
  const {container, modalContainer, overlay} = useStyles();
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [babyCount, setBabyCount] = useState(0);

  useEffect(() => {
    if (isRefreshed) {
      setAdultCount(1);
      setChildrenCount(0);
      setBabyCount(0);
    }
  }, [isRefreshed]);

  const changeCount = (type: string, increment: boolean) => {
    if (type === textContent.adult) {
      setAdultCount(prevCount => (increment ? prevCount + 1 : prevCount - 1));
    } else if (type === textContent.child) {
      setChildrenCount(prevCount =>
        increment ? prevCount + 1 : prevCount - 1,
      );
    } else if (type === textContent.baby) {
      setBabyCount(prevCount => (increment ? prevCount + 1 : prevCount - 1));
    }
  };

  const handlePassangerCount = (totalCount: number) => {
    if (onSelectPassenger) onSelectPassenger(totalCount);
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      style={container}>
      <View style={overlay}>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.7)"></StatusBar>
        <View style={modalContainer}>
          <Header
            title={textContent.addPassenger}
            onClick={() => {
              if (onClose) onClose();
            }}
          />
          <Divider marginH={0} marginB={16} />
          <PassengerCount
            svg={<Adult />}
            type={textContent.adult}
            description={textContent.adultDesc}
            count={adultCount}
            onChange={(increment: boolean) =>
              changeCount(textContent.adult, increment)
            }
          />
          <Divider marginH={16} marginB={16} />
          <PassengerCount
            svg={<Child />}
            type={textContent.child}
            description={textContent.childDesc}
            count={childrenCount}
            onChange={(increment: boolean) =>
              changeCount(textContent.child, increment)
            }
          />
          <Divider marginH={16} marginB={16} />
          <PassengerCount
            svg={<Baby />}
            type={textContent.baby}
            description={textContent.babyDesc}
            count={babyCount}
            onChange={(increment: boolean) =>
              changeCount(textContent.baby, increment)
            }
          />
          <Divider marginH={0} marginB={16} />
          <AppButton
            title={textContent.done}
            onClick={() => {
              if (onClose) onClose();
              handlePassangerCount(adultCount + childrenCount + babyCount);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
export default PassangerModal;
