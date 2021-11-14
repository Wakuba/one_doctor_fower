import { App } from '@slack/bolt'
import signUp from '../firebase/signUp'

const useActionListener = async (app: App) => {
  try {
    const result = await app.action(
      { action_id: 'is_medcoworker', block_id: 'is_approved_or_not' },
      async ({ body, say, ack }) => {
        // const {} = body
        await ack()
        await say(body.user.id)
        signUp({ email: 'm16065kt@jichi.ac.jp', password: 'tatsujin16' })
      }
    )
    console.log(result)
  } catch (error) {
    console.log('error', error)
  }
}

export default useActionListener

// body objectの内容

// {
//   "type": "block_actions",
//   "team": {
//     "id": "T9TK3CUKW",
//     "domain": "example"
//   },
//   "user": {
//     "id": "UA8RXUSPL",
//     "username": "jtorrance",
//     "team_id": "T9TK3CUKW"
//   },
//   "api_app_id": "AABA1ABCD",
//   "token": "9s8d9as89d8as9d8as989",
//   "container": {
//     "type": "message_attachment",
//     "message_ts": "1548261231.000200",
//     "attachment_id": 1,
//     "channel_id": "CBR2V3XEX",
//     "is_ephemeral": false,
//     "is_app_unfurl": false
//   },
//   "trigger_id": "12321423423.333649436676.d8c1bb837935619ccad0f624c448ffb3",
//   "channel": {
//     "id": "CBR2V3XEX",
//     "name": "review-updates"
//   },
//   "message": {
//     "bot_id": "BAH5CA16Z",
//     "type": "message",
//     "text": "This content can't be displayed.",
//     "user": "UAJ2RU415",
//     "ts": "1548261231.000200",
//     ...
//   },
//   "response_url": "https://hooks.slack.com/actions/AABA1ABCD/1232321423432/D09sSasdasdAS9091209",
//   "actions": [
//     {
//       "action_id": "WaXA",
//       "block_id": "=qXel",
//       "text": {
//         "type": "plain_text",
//         "text": "View",
//         "emoji": true
//       },
//       "value": "click_me_123",
//       "type": "button",
//       "action_ts": "1548426417.840180"
//     }
//   ]
// }
