import { database } from "./src/database/config.js";

try {
  const sql = `
    INSERT INTO Hotels (name, stars, latitude, longitude, description, address, district, city, state, country, placeId, thumb, images, amenities, pois, reviews, createdAt, updatedAt)
    VALUES
      (
        'Lua Nova Hotel', 
        1, 
        '-23.51464704884', 
        '-46.6229242086411', 
        'Situado a 250 m pela saída lateral do Terminal Rodoviário Tietê/Metro Portuguesa-Tietê,. A 5min.de carro do Anhembi Centro de exposições, 10min de caminhada do Expo Center Norte, 3min. de caminhada do Shopping Center Norte, O Aeroporto Internacional de Guarulhos fica a 22,7 km de distância aprox. 25/30min. de carro. Os quartos claros são decorados em tons agradáveis, todos os quartos do Hotel Lua Nova possuem TV e roupa de cama, banheiro privativo, Wifi e café da manhã gratuito.',
        'R. Cel. Antônio de Carvalho , 269', 
        'Santana', 
        'São Paulo', 
        'SP', 
        'BR', 
        'ChIJ0WGkg4FEzpQRrlsz_whLqZs', 
        'https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586013.jpg', 
        '["https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586013.jpg", "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586015.jpg", "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586016.jpg", "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586017.jpg", "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586018.jpg", "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586019.jpeg.jpg", "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586021.jpg", "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586022.jpg", "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1168029.jpeg.jpg", "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1167991.jpeg.jpg", "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1167992.jpeg.jpg", "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1167993.jpeg.jpg", "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1168030.jpeg.jpg", "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1168031.jpeg.jpg"]',
        '[{"key": "WI_FI", "label": "Internet"}, {"key": "BREAKFAST", "label": "Café da manhã"}, {"key": "PARKING", "label": "Estacionamento"}]', 
        '[{"lat": -23.515589999999975, "long": -46.62459999999993, "name": "Casa do Pão de Queijo", "type": "Food", "address": "Rua Eudoro Lemos, Santana, São Paulo, 02030-010", "distance": 3}, {"lat": -23.51572999999996, "long": -46.62459999999993, "name": "Cia da Empada", "type": "Food", "address": "Rua Eudoro Lemos, Santana, São Paulo, 02030-010", "distance": 3.15}, {"lat": -23.51333999999997, "long": -46.62493999999998, "name": "Spoleto", "type": "Food", "address": "Avenida Cruzeiro do Sul, Santana, São Paulo, 02030-000", "distance": 3.75}, {"lat": -23.513109999999983, "long": -46.62492999999995, "name": "Restaurante Picote", "type": "Food", "address": "Avenida Cruzeiro do Sul 2046, Santana, São Paulo, 02030-000", "distance": 4.05}, {"lat": -23.516089999999963, "long": -46.62501999999995, "name": "Café Donuts-Rodoviária Tietê", "type": "Food", "address": "Avenida Cruzeiro do Sul, Santana, São Paulo, 02030-000", "distance": 4.05}, {"lat": -23.516529999999932, "long": -46.62503999999995, "name": "Metrô-Portuguesa-Tietê-Avenida Cruzeiro do Sul-Lado Par", "type": "Metro", "address": "Avenida Cruzeiro do Sul, Santana, São Paulo, 02030-000", "distance": 4.5}, {"lat": -23.516339999999957, "long": -46.62528999999995, "name": "Metrô-Portuguesa-Tietê-Avenida Cruzeiro do Sul-Lado Ímpar", "type": "Metro", "address": "Avenida Cruzeiro do Sul, Santana, São Paulo, 02031-000", "distance": 4.65}]', 
        '[]', 
        '2023-01-09 23:24:51', 
        '2024-09-05 10:20:00'
      );
  `;

  database.query(sql)
} catch (err) {
  conso.log(err.message)
}