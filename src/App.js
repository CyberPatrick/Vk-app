import React, {useState} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {Button, Div, Panel, PanelHeader, PanelHeaderBack, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import './panels/game.css'
import Game from './tic-tac-toe/Game'

async function getInfo(promise, key) {
	const answer = await bridge.send(promise);
	return answer[key];

}

async function request(url) {
	return await fetch(url).then(res => res.array());
}


async function App() {
	const [panel, setPanel] = useState({current: 'main', previous: ''});
	const [user_id, setUser_id] = useState()

	setUser_id(await getInfo('VKWebAppGetUserInfoResult', 'id'));

	return (
		<View activePanel={panel.current}>
			<Panel id='main'>
				<PanelHeader>Выберите игру {user_id}</PanelHeader>
				<Div>
					<Button size='xl' stretched style={{marginTop: 25}}
							onClick={() => setPanel({current: 'tic-tac-toe-hub', previous: panel.current})}>
						Крестики-нолики
					</Button>
					<Button size='xl' stretched style={{marginTop: 25}} mode='secondary'
							onClick={() => setPanel({current: 'sea-battle-hub', previous: panel.current})}>
						Морской бой
					</Button>
				</Div>
			</Panel>
			<Panel id='tic-tac-toe-hub'>
				<PanelHeader left={<PanelHeaderBack
					onClick={() => setPanel({current: panel.previous, previous: panel.current})}/>}>
					Крестики-нолики
				</PanelHeader>
				<Div>
					<Button size='xl' stretched style={{marginTop: 25}}
							onClick={() => setPanel({current: 'tic-tac-toe', previous: panel.current})}>
						Поиск противника
					</Button>
					<Button size='xl' stretched style={{marginTop: 25}}
							onClick={() => console.log("Development")}>
						Рейтинг
					</Button>
				</Div>
			</Panel>
			<Panel id='sea-battle-hub'>
				<PanelHeader left={<PanelHeaderBack
					onClick={() => setPanel({current: panel.previous, previous: panel.current})}/>}>
					Морской бой
				</PanelHeader>
				<Div>
					<Button size='xl' stretched style={{marginTop: 25}}
							onClick={() => console.log("Development")}>
						Поиск противника
					</Button>
					<Button size='xl' stretched style={{marginTop: 25}}
							onClick={() => console.log("Development")}>
						Рейтинг
					</Button>
				</Div>
			</Panel>
			<Panel id='tic-tac-toe'>
				<PanelHeader>
					Битва
				</PanelHeader>
				<h1>{await request(`/users?user_id=${user_id}`)}</h1>
				<Game/>
			</Panel>
		</View>
	);
}

export default App;