import React from 'react'
import styled from 'styled-components'
import { selectGoalsMap } from '../../../../store/goalsSlice'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  setContent as setContentRedux,
  setIsOpen as setIsOpenRedux,
  setType as setTypeRedux
} from '../../../../store/modalSlice'
import { Card } from '../../../components/Card'

type Props = { id: string }

export default function GoalCard(props: Props) {
  const dispatch = useAppDispatch()

  const goal = useAppSelector(selectGoalsMap)[props.id]

  const onClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    dispatch(setContentRedux(goal))
    dispatch(setTypeRedux('Goal'))
    dispatch(setIsOpenRedux(true))
  }

  const asLocaleDateString = (date: Date) => new Date(date).toLocaleDateString()

  return (
    <Container key={goal.id} onClick={onClick}>
      <TargetAmount>${goal.targetAmount}</TargetAmount>
      <TargetDate>{asLocaleDateString(goal.targetDate)}</TargetDate>
    </Container>
  )
}

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  min-height: 140px;
  min-width: 140px;
  width: 33%;
  cursor: pointer;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 2rem;

  align-items: center;
`
const TargetAmount = styled.h2`
  font-size: 2rem;
`

const TargetDate = styled.h4`
  color: rgba(174, 174, 174, 1);
  font-size: 1rem;
`

// GoalCard.tsx

const Icon = styled.h1`
  font-size: 5.5rem;
`

export default function GoalCard(props: Props) {
  // ...

  return (
    <Container key={goal.id} onClick={onClick}>
      {/* ... */}

      <Icon>{goal.icon}</Icon>
    </Container>
  )
}

// GoalManager.tsx

type EmojiPickerContainerProps = { isOpen: boolean; hasIcon: boolean }

const EmojiPickerContainer = styled.div<EmojiPickerContainerProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  top: ${(props) => (props.hasIcon ? '10rem' : '2rem')};
  left: 0;
`

export function GoalManager(props: Props) {
  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState(false)

  const hasIcon = () => icon != null

  const pickEmojiOnClick = (emoji: BaseEmoji, event: MouseEvent) => {
    // TODO(TASK-2) Stop event propogation
    // TODO(TASK-2) Set icon locally
    // TODO(TASK-2) Close emoji picker
    // TODO(TASK-2) Create updated goal locally
    // TODO(TASK-2) Update Redux store
    // TODO(TASK-3) Update database
  }

  return (
    {/* ... */}

    <EmojiPickerContainer
      isOpen={emojiPickerIsOpen}
      hasIcon={hasIcon()}
      onClick={(event) => event.stopPropagation()}
    >
      <EmojiPicker onClick={pickEmojiOnClick} />
    </EmojiPickerContainer>

    {/* ... */}
  )
}

// GoalManager.tsx

type EmojiPickerContainerProps = { isOpen: boolean; hasIcon: boolean }

const EmojiPickerContainer = styled.div<EmojiPickerContainerProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  top: ${(props) => (props.hasIcon ? '10rem' : '2rem')};
  left: 0;
`

export function GoalManager(props: Props) {
  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState(false)

  const hasIcon = () => icon != null

  const pickEmojiOnClick = (emoji: BaseEmoji, event: MouseEvent) => {
    // TODO(TASK-2) Stop event propogation
    // TODO(TASK-2) Set icon locally
    // TODO(TASK-2) Close emoji picker
    // TODO(TASK-2) Create updated goal locally
    // TODO(TASK-2) Update Redux store
    // TODO(TASK-3) Update database
  }

  return (
    {/* ... */}

    <EmojiPickerContainer
      isOpen={emojiPickerIsOpen}
      hasIcon={hasIcon()}
      onClick={(event) => event.stopPropagation()}
    >
      <EmojiPicker onClick={pickEmojiOnClick} />
    </EmojiPickerContainer>

    {/* ... */}
  )
}

const pickEmojiOnClick = (emoji: BaseEmoji, event: MouseEvent) => {
  event.stopPropagation()

  setIcon(emoji.native)
  setEmojiPickerIsOpen(false)

  const updatedGoal: Goal = {
    ...props.goal,
    icon: emoji.native ?? props.goal.icon,
    name: name ?? props.goal.name,
    targetDate: targetDate ?? props.goal.targetDate,
    targetAmount: targetAmount ?? props.goal.targetAmount,
  }

  dispatch(updateGoalRedux(updatedGoal))

  // TODO(TASK-3) Update database
}
