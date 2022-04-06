import { rest } from 'msw';
import { data } from './fixtures';

export const handlers = [
  rest.get(
    'https://api.openweathermap.org/data/2.5/weather?q=%C5%81a%C5%84cut&lang=pl&appid=654e30152cf4fefc174d36f9ec8b074f&units=metric',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(data));
    }
  ),
];
