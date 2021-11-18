

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startEviction() {
    state = {}
        showTextNode(1)
    }


function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
        textElement.innerText = textNode.text 

        while (optionButtonsElement.firstChild) {
            optionButtonsElement.removeChild(optionButtonsElement.firstChild)
        }

        textNode.options.forEach(option => {
            if (showOption(option)) {
              const button = document.createElement('button')
              button.innerText = option.text
              button.classList.add('btn')
              button.addEventListener('click', () => selectOption(option))
              optionButtonsElement.appendChild(button)
            }
          })
        }
        

function showOption(option) {
    return option.requiredState == null ||  option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startEviction()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

 
}

const textNodes = [
  {
    id: 1,
    text: 'It is Monday, and your court date is scheduled for the following Monday. You work on Mondays but your job doesn`t offer paid time off (PTO). What do you do?',
    options: [
      {
        text: 'Take the day off work and go to court',
        nextText: 2
      },
      {
        text: 'Skip court',
        nextText: 3
      }
    ]
  },

  {
    id: 2,
    text: 'You take the day off of work and need to coordinate a ride to the small claims court building. Do you ask a friend for a ride, depend on public transit, or spend money on a taxi/rideshare?',
    options: [
      {
        text: 'Ask a friend',
        nextText: 4 
      },
      {
        text: 'Ride the bus',
        nextText: 5
      },
      {
        text: 'Pay for a taxi/rideshare',
        nextText: 6
      }
    ]
  },

  {
    id: 3,
    text: 'You do not go to court so the ruling is automatically in your landlord`s favor. You now have 10 days to either gather your belongings and await the Forsyth County Sheriff`s Department to evict you, or file an appeal. What do you do?',
    options: [
      {
        text: 'Don`t file an appeal',
        nextText: 8
      },
      {
        text: 'File an appeal',
        nextText: 7
      }
    ]
  },
  {
      id: 4,
      text: 'You are able to catch a ride with a friend, you arrive at Small CLaims Court at 8:50am, walk into the building and verify your name is on the docket. You take a seat in the waiting area and await your name to be called. When called, you realize that your landlord is not present, but has an attorney representing them. The hearing goes so quickly, that you had to clarify the judgement with the magistrate. They ruled in favor of the landlord. You are going to be evicted. Do you await the Forsyth County Sheriff Department to lock you out of your home, or file an appeal?',
      options: [
          {
            text: 'Don`t file an appeal',
            nextText: 8
          },
          {
            text: 'File an Appeal',
            nextText: 7
          }
        ]
      },

    {
        id: 5,
        text: 'The bus was running late, and you unfortunately arrived at the court too late. The magistrate automatically ruled in the landlord`s favor. You are going to be evicted. Do you file an appeal or allow the lock-out to occur?',
        options: [
            {
                text: 'Don`t file an appeal',
                nextText: 8
            },
    
            {
                text: 'File an Appeal',
                nextText: 7
            }
            ]
    },
    {
        id: 6,
        text: 'You had to shift money for the ride from the grocery budget to cover the rideshare. You arrive at court, do you have legal representation?',
        options: [
            {
                text: 'Yes',
                nextText: 9
            },
    
            {
                text: 'No',
                nextText: 10 
            }
            ]
        },

    {
        id: 7, 
        text: 'You decide to appeal the decision, you arrive at the Clerk of Courts` office. Do you receive TANF/SNAP/SSID assistance?',
        options: [
            {
              text: 'Yes',
              nextText: 11 
            },
            {
              text: 'No',
              nextText: 12
            }
        ]
    }
]
/*
    {
        id: 8, 
        text: 'This is the reality of countless tenants across Winston-Salem, Forsyth County. How can you help? Sign the petition requesting the city further fund a Right to Counsel program for tenants',
        options:
        [
          {
          text: 'Restart',
          nextText: -1
          },
        ]
    },
    {
      id: 9,
      text: '',
      options:
        [
          {
          text: 'Restart',
          nextText: -1
          }
        ] 
      },
    {
      id: 10,
      options:
      [
        {
        text: 'NO LAWYER - LOSS -> TO 8',
        nextText: 8
        }
      ]
    }
  ] */
