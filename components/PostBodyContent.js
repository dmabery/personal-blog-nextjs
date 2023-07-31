import Markdown from "markdown-to-jsx";
import InlineImage from "./InlineImage";
import SideNote from "./SideNote";
import Subscribe from "./Subscribe";
import SubscribeGroup from "./SubscribeGroup";

const PostBodyContent = (props) => (
  <div className="prose prose-quoteless text-base text-neutral-300/90 underline-offset-2 prose-h1:leading-tight prose-h2:text-2xl prose-h2:text-[#0C2059] prose-h3:text-xl prose-h3:text-gray-800 prose-h4:text-xl prose-h4:text-[#263459] prose-a:text-blue-700 prose-a:no-underline hover:prose-a:text-blue-900 hover:prose-a:underline prose-blockquote:border-none prose-blockquote:pl-10 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:leading-normal prose-blockquote:text-[#414141] prose-pre:font-normal sm:prose-h1:leading-tight">
    <Markdown
      options={{
        overrides: { SideNote, Subscribe, InlineImage, SubscribeGroup },
      }}
    >
      {props.content || ""}
    </Markdown>
  </div>
);

export default PostBodyContent;
