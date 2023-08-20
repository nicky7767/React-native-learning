
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/Goalitem";
import GoalInput from "./components/Goalinput";


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal = {addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text = {itemData.item.text} onDeleteItem = {deleteGoalHandler} id = {itemData.item.id}/>;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical = {false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  
  goalsContainer: {
    flex: 4,
  },
});



// const photos = [
//   { id: 1, date: '2023-02-26', url: require('./Images/Image1.jpeg') },
//   { id: 2, date: '2023-06-26', url: require('./Images/Image2.jpeg') },
//   { id: 3, date: '2023-06-27', url: require('./Images/Image3.png') },
//   { id: 4, date: '2023-06-27', url: require('./Images/Image4.jpg') },
//   { id: 5, date: '2023-06-27', url: require('./Images/Image5.jpeg') },
//   { id: 6, date: '2023-05-28', url: require('./Images/Image6.jpg') },
//   { id: 7, date: '2023-05-28', url: require('./Images/Image7.jpeg') },
//   { id: 8, date: '2023-05-28', url: require('./Images/Image8.jpg') },
//   { id: 9, date: '2023-05-29', url: require('./Images/Image9.jpg') },
//   { id: 10, date: '2023-05-29', url: require('./Images/Image10.jpg') },
//   { id: 11, date: '2023-05-29', url: require('./Images/Image11.jpg') },
//   { id: 12, date: '2023-04-30', url: require('./Images/Image12.jpg') },
//   { id: 13, date: '2023-04-30', url: require('./Images/Image13.webp') },
//   { id: 14, date: '2023-04-30', url: require('./Images/Image14.jpg') },
//   { id: 15, date: '2023-04-30', url: require('./Images/Image15.jpeg') },
//   {id: 16, date: '2023-05-28', url: require('./Images/bright.png')}
// ];

// const photosByDate = photos.reduce((acc, photo) => {
//   const date = photo.date;
//   if (!acc[date]) {
//     acc[date] = [];
//   }
//   acc[date].push(photo);
//   return acc;
// }, {});


// const WIDTH = Dimensions.get('window').width;






// export default function App() {

//   return (
//     <View>
//       <FlatList
//           data={photosByDateArray}
//           renderItem={({ item }) => (
//               <View>
//                   <Text style={styles.date}>{item.key}</Text>
//                   <FlatList
//                       data={item.value}
//                       renderItem={renderItem}
//                       numColumns={2}
//                       horizontal={false}
//                   />
//               </View>
//           )}
//       />
//       {/* <BottomDrawer image={selectedImage} isBottomSheetOpen={modalVisible} handleCloseBottomSheet={closeBottomSheet} /> */}
//     </View>

//   );
// } 

// const styles = StyleSheet.create({
//   card: {
//     width: WIDTH / 2.1,
//     height: WIDTH / 2,
//     margin: 2,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 2,
//     marginTop: 5,
//     marginStart: 5,
//   },
//   date: {
//     fontSize: 20, 
//     fontWeight: 'bold', 
//     margin: 5, 
//     color: 'black',
//   },
// });