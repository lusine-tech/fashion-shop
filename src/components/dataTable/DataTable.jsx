
import productImg from "../../img/img1.jpg";
import "./dataTable.css";
import { nanoid } from "nanoid";
import { Grid, Segment, List, Image, Dropdown, Item } from "semantic-ui-react";
import "./dataTable.css";
import { useState } from "react";





function DataTable({ list, uploadImg }) {
  const [imgFile, setImgFile] = useState();

  console.log(list);
  function onChange(e) {

    setImgFile(e.target.files[0]);

  }
  console.log(imgFile);

  // function onFormSubmit() {

  // }
  return (
    <>
      {list &&
        list.length > 0 &&
        list.map((item) => {
                  return (
            <Grid className="grid-table" key={nanoid()}>
              <Grid.Row>
                <Grid.Column width="1">
                  <Segment.Inline>{Item.id}</Segment.Inline>
                </Grid.Column>
                <Grid.Column width="3">
                  <Segment.Inline>
                    <Image
                      avatar
                      className="product-icon"
                      src={item.img[0]?.imagePath || productImg}
                    />
                  </Segment.Inline>
                </Grid.Column>
                <Grid.Column width="5">
                  <Segment.Inline>
                    <List.Content>
                      <List.Header>{item.name} </List.Header>
                      {item.price}
                    </List.Content>
                  </Segment.Inline>
                </Grid.Column>
                <Grid.Column width="4">
                  <Segment.Inline>"item.orderStatus"</Segment.Inline>
                </Grid.Column>
                <Grid.Column width="3">
                  <Segment.Inline>
                    <form onSubmit={(e)=>{
                      e.preventDefault();
                      uploadImg(imgFile);
                    }}>
                      <input type="file" onChange={onChange} />
                      <button type="submit">Upload!</button>
                    </form>
                  </Segment.Inline>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          );
        })}
    </>
  );
}



export default DataTable;

