import useAppContext from './useAppContext';

type Props = {
  _otherUserId: string;
};

export function useGetMessages({_otherUserId}: Props) {
  const {
    state: {messageData, currentUserId},
  } = useAppContext();

  if (currentUserId._id === '' && _otherUserId === '') {
    return [];
  }

  const messageDataArray = messageData?.filter(
    item =>
      (item?._id === _otherUserId && item?.user?._id === currentUserId?._id) ||
      (item?._id === currentUserId?._id && item?.user._id === _otherUserId),
  );

  let result: any = [];
  let messageSectionList: any = [];

  messageDataArray.map(d => {
    if (d.createdAt) {
      let date = d.createdAt.toString();
      if (date.length) {
        if (!result[date]) {
          result[date] = [d];
        } else {
          result[date].push(d);
        }
      }
    }
  });

  Object.entries(result).map(([key, value]) => {
    messageSectionList.push({
      title: key,
      data: value,
    });
  });

  return messageSectionList;
}
