import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const products = [
  {
    id: uuid(),
    name: 'Edad',
    des:'6 Meses',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: moment().subtract(6, 'meses')
  },
  {
    id: uuid(),
    name: 'Peso',
    des:'5 Kg',
    imageUrl: '/static/images/products/product_2.png',
    updatedAt: moment().subtract(10, 'Kilos')
  },
  {
    id: uuid(),
    name: 'Altura',
    des:'35 Cm',
    imageUrl: '/static/images/products/product_3.png',
    updatedAt: moment().subtract(3, 'S')
  },
  {
    id: uuid(),
    name: 'Circunferencia Cefálica ',
    des:'16 Cm',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'Percentil',
    des:'6',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];

const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Datos"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              info={product.des}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            info={product.des}
            secondary={product.des} //{`Updated ${product.updatedAt.fromNow()}`} Para el tiempo de actualizacion
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestProducts;
