import React, {useState} from 'react';
import {View, Text, HStack, Flex, Box, Tooltip} from 'native-base';

const Main = () => {
  const [the, setThe] = useState(false);
  const [is, setIs] = useState(false);
  const [small, setSmall] = useState(false);
  return (
    <View bg="primary.aqua" flex={1} justifyContent="flex-end">
      <View flex={1} />
      <View
        bg="primary.grey"
        flex={3}
        borderTopRadius="40px"
        justifyContent="space-between"
        p={5}>
        <View alignItems="center">
          <Text color="white" mt="12px">
            Fill in the missing word
          </Text>
          <Text
            color="white"
            fontWeight="400"
            fontSize="25px"
            letterSpacing="0.5px"
            mt="12px">
            The{' '}
            <Text textDecorationLine="underline" fontWeight="700">
              house
            </Text>{' '}
            is small.
          </Text>
          <HStack w="65%" justifyContent="space-between" mt="40px">
            <View
              borderBottomWidth="1px"
              borderBottomStyle="dotted"
              borderBottomColor="white">
              <Tooltip
                label="The"
                placement="top"
                isOpen={the}
                bg="white"
                top="30px"
                _text={{
                  color: 'primary.grey',
                }}>
                <Text
                  fontSize="18px"
                  color="white"
                  onPress={() => setThe(t => !t)}>
                  Das
                </Text>
              </Tooltip>
            </View>
            <View borderBottomWidth="1px" borderBottomColor="white" width="30%">
              <View />
            </View>
            <View
              borderBottomWidth="1px"
              borderBottomStyle="dotted"
              borderBottomColor="white">
              <Tooltip
                label="is"
                placement="top"
                isOpen={is}
                bg="white"
                top="30px"
                _text={{
                  color: 'primary.grey',
                }}>
                <Text
                  fontSize="18px"
                  color="white"
                  onPress={() => setIs(p => !p)}>
                  ist
                </Text>
              </Tooltip>
            </View>
            <View
              borderBottomWidth="1px"
              borderBottomStyle="dotted"
              borderBottomColor="white">
              <Tooltip
                label="small."
                placement="top"
                isOpen={small}
                bg="white"
                top="30px"
                _text={{
                  color: 'primary.grey',
                }}>
                <Text
                  fontSize="18px"
                  color="white"
                  onPress={() => setSmall(s => !s)}>
                  Klein.
                </Text>
              </Tooltip>
            </View>
          </HStack>
          <Flex
            wrap="wrap"
            direction="row"
            mt="50px"
            w="80%"
            justifyContent="center">
            {['folgen', 'Schaf', 'Bereiden', 'Hause'].map((val, indx) => (
              <Box
                key={indx.toString()}
                bg="white"
                borderRadius="15px"
                p="10px"
                m="10px"
                shadow="5"
                _text={{
                  fontWeight: '700',
                  color: 'primary.grey',
                  fontSize: '20px',
                }}>
                {val}
              </Box>
            ))}
          </Flex>
        </View>
        <View>
          <Box
            bg="primary.teal"
            borderRadius="30px"
            py={5}
            w="100%"
            _text={{
              fontWeight: '700',
              color: 'white',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}>
            Continue
          </Box>
        </View>
      </View>
    </View>
  );
};

export default Main;
