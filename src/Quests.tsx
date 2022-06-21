import { createSignal, For } from 'solid-js';
import Quest from './Quest';
import { useStore } from './store';

const Quests = () => {
  // const [state, { add }] = useStore();
  const [quests, setQuests] = createSignal([]);

  let i = 0;
  while (i < 20) {
    setQuests([...quests(), 'quest ' + i]);
    i += 1;
  }

  setQuests([
    ...quests(),
    'que jflkjsdff lkjs dflkjsd flkjs dfklsjd f lksdjf l flksjdf lksjd flskjdfksdj flskdfj sdfst ' +
      i,
  ]);

  return (
    <div class="w-full">
      <div class="mx-auto w-96">
        <For each={quests()}>
          {(quest) => (
            <Quest questName={quest} setName={(name) => console.log(name)} />
          )}
        </For>
      </div>
    </div>
  );
};

export default Quests;
